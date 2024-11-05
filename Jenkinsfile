pipeline {
    agent any

    triggers {
        cron('H/10 * * * *')
    }

    environment {
        // Add Node.js and npm paths to the pipeline environment
        PATH = "$PATH:/home/ubuntu/.nvm/versions/node/v22.11.0/bin"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/bmukund21/api-framework-project.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                npm install
                npx playwright install
                '''
            }
        }

        stage('Run API Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            script {
                // Archive HTML report if it exists
                if (fileExists('test-results/report.html')) {
                    archiveArtifacts artifacts: 'test-results/report.html', allowEmptyArchive: true
                } else {
                    echo 'No HTML report found to archive.'
                }
            }
        }
        
        always {
            emailext to: 'bmukund.official@gmail.com',
                     subject: 'API Test Automation Results',
                     body: 'The latest 10-minute run of the API test automation has completed. Please check Jenkins for details.',
                     attachLog: true
        }
    }
}
