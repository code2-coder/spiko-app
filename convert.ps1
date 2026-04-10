Get-ChildItem -Path "src" -Recurse -Include *.tsx, *.ts | ForEach-Object {
    $oldPath = $_.FullName
    $ext = $_.Extension
    $newExt = if ($ext -eq ".tsx") { ".jsx" } else { ".js" }
    $newPath = [System.IO.Path]::ChangeExtension($oldPath, $newExt)
    
    Write-Host "Converting $oldPath to $newPath"
    
    # Run detype
    npx -y detype "$oldPath" "$newPath"
    
    if ($LASTEXITCODE -eq 0 -or $?) {
        Remove-Item -Path $oldPath -Force
    } else {
        Write-Host "Failed to convert $oldPath" -ForegroundColor Red
    }
}
