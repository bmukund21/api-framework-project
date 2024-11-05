pipeline {
    agent any

    environment {
        PATH = "$PATH:/home/ubuntu/.nvm/versions/node/v22.11.0/bin"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Set Permissions') {
            steps {
                // Set executable permissions only for npm and node
                sh 'chmod +x /home/ubuntu/.nvm/versions/node/v22.11.0/bin/npm'
                sh 'chmod +x /home/ubuntu/.nvm/versions/node/v22.11.0/bin/node'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies with npm
                sh '''
                /home/ubuntu/.nvm/versions/node/v22.11.0/bin/npm install
                /home/ubuntu/.nvm/versions/node/v22.11.0/bin/npx playwright install
                '''
                
                // Set read/write permissions for the node_modules directory after installation
                sh 'chmod -R 755 node_modules || true'
            }
        }

        stage('Run API Tests') {
            steps {
                // Run the tests using npx playwright test
                sh '/home/ubuntu/.nvm/versions/node/v22.11.0/bin/npx playwright test'
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('report.html')) {
                    archiveArtifacts artifacts: 'report.html', allowEmptyArchive: true
                } else {
                    echo "No HTML report found to archive."
                }
            }
            emailext to: 'bmukund.official@gmail.com',
                     subject: "Build ${env.BUILD_NUMBER} - ${currentBuild.result}",
                     body: "Build ${env.BUILD_NUMBER} completed with status: ${currentBuild.result}"
        }
    }
}
