pipeline {
    agent any  // Use any available agent for this job

    triggers {
        cron('H/10 * * * *')  // Trigger the pipeline to run every 10 minutes
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the GitHub repository
                git url: 'https://github.com/bmukund21/api-framework-project.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies and Playwright
                    sh 'npm install'
                    sh 'npx playwright install'
                }
            }
        }

        stage('Run API Tests') {
            steps {
                script {
                    // Run Playwright tests
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Archive test results if the directory exists
            script {
                if (fileExists('test-results')) {
                    archiveArtifacts artifacts: 'test-results/**/*.json', allowEmptyArchive: true
                    junit 'test-results/**/*.xml'  // Publish JUnit results if they exist
                } else {
                    echo 'No test results found to archive.'
                }
            }
        }
        
        failure {
            // Send an email notification on test failure
            mail to: 'bmukund.official@gmail.com',
                 subject: 'API Test Automation Failure',
                 body: 'The latest 10-minute run of the API test automation failed. Please check Jenkins for details.'
        }
    }
}
