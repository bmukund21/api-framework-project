pipeline {
    agent any

    triggers {
        cron('H/10 * * * *')
    }

    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                # Install Node.js and npm (Ubuntu example)
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                sudo apt-get install -y nodejs
                '''
            }
        }

        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/bmukund21/api-framework-project.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
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
                if (fileExists('test-results')) {
                    archiveArtifacts artifacts: 'test-results/**/*.json', allowEmptyArchive: true
                    junit 'test-results/**/*.xml'
                } else {
                    echo 'No test results found to archive.'
                }
            }
        }
        
        failure {
            mail to: 'your-email@example.com',
                 subject: 'API Test Automation Failure',
                 body: 'The latest 10-minute run of the API test automation failed. Please check Jenkins for details.'
        }
    }
}
