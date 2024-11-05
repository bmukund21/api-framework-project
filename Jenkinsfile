pipeline {
    agent any

    triggers {
        cron('H/10 * * * *')
    }

    stages {
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
                // Archive the Playwright HTML report so it's accessible from Jenkins
                if (fileExists('test-results/report.html')) {
                    archiveArtifacts artifacts: 'test-results/report.html', allowEmptyArchive: true
                } else {
                    echo 'No HTML report found to archive.'
                }
            }

            // Send email with HTML report as an attachment if SMTP is configured
            emailext (
                subject: 'API Test Automation Report',
                body: 'The latest run of the API test automation is complete. See the attached report for details.',
                attachLog: true,
                attachmentsPattern: 'test-results/report.html',
                to: 'bmukund.official@gmail.com'
            )
        }
    }
}
