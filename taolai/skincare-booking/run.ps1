# PowerShell script to launch the demo HTML page

$htmlFile = "$(Get-Location)\demo.html"
Write-Host "Opening BeautySpa - Skincare Booking Demo"
Write-Host "HTML file path: $htmlFile"

# Check if file exists
if (Test-Path $htmlFile) {
    # Open the HTML file in the default browser
    Start-Process $htmlFile
    Write-Host "Demo opened in your default browser."
} else {
    Write-Host "Error: Could not find demo.html file."
    Write-Host "Please make sure you're running this script from the skincare-booking directory."
}

Write-Host ""
Write-Host "Note: This is a static HTML demo of the BeautySpa application."
Write-Host "In a real environment, you would run the Spring Boot backend and React frontend separately."
Write-Host "The actual application requires npm and Maven to be installed." 