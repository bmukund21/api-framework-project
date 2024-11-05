pipeline {
    agent any

    triggers {
        cron('H/10 * * * *') // Runs every 10 minutes
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
}
