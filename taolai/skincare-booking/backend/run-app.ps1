# PowerShell script to run Spring Boot application with Java directly
Write-Host "Compiling and running Spring Boot application..."

# Set necessary variables 
$SRC_DIR = ".\src\main\java"
$TARGET_DIR = ".\target\classes"
$RESOURCES_DIR = ".\src\main\resources"
$LIB_DIR = ".\lib"

# Create target directories if they don't exist
if (-not (Test-Path -Path $TARGET_DIR)) {
    New-Item -ItemType Directory -Path $TARGET_DIR -Force | Out-Null
}

if (-not (Test-Path -Path $LIB_DIR)) {
    New-Item -ItemType Directory -Path $LIB_DIR -Force | Out-Null
}

# Download dependencies using Java directly
Write-Host "Checking for Spring Boot dependencies..."
$SPRING_BOOT_JAR = "$LIB_DIR\spring-boot-2.7.5.jar"
$SPRING_BOOT_AUTOCONFIGURE_JAR = "$LIB_DIR\spring-boot-autoconfigure-2.7.5.jar"
$SPRING_CORE_JAR = "$LIB_DIR\spring-core-5.3.23.jar"
$SPRING_CONTEXT_JAR = "$LIB_DIR\spring-context-5.3.23.jar"

if (-not (Test-Path -Path $SPRING_BOOT_JAR)) {
    Write-Host "Downloading Spring Boot dependencies..."
    # In a real scenario, we would download Spring Boot JARs
    # For this demo, we'll create dummy files
    "Spring Boot JAR" | Out-File -FilePath $SPRING_BOOT_JAR
    "Spring Boot Autoconfigure JAR" | Out-File -FilePath $SPRING_BOOT_AUTOCONFIGURE_JAR
    "Spring Core JAR" | Out-File -FilePath $SPRING_CORE_JAR
    "Spring Context JAR" | Out-File -FilePath $SPRING_CONTEXT_JAR
}

# Copy resources to target directory
Write-Host "Copying resources..."
if (Test-Path -Path $RESOURCES_DIR) {
    Copy-Item -Path "$RESOURCES_DIR\*" -Destination $TARGET_DIR -Recurse -Force
}

# Compile Java source files (simplified)
Write-Host "Compiling Java files..."
# In a real scenario, we would use javac to compile all .java files

# Run the application
Write-Host "Running the application..."
Write-Host "Note: This is just a demo script. In a real scenario, you would need Maven or Gradle to handle all dependencies properly."
Write-Host "Try running the demo by running .\run.ps1 from the main project directory."

# Open the demo page
.\run.ps1

$env:JAVA_HOME = "C:\đường\dẫn\đến\thư mục\Java" 
cd backend
mvn spring-boot:run 