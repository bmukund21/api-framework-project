pipeline {
    agent any

    environment {
        PATH = "$PATH:/home/ubuntu/.nvm/versions/node/v22.11.0/bin"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/bmukund21/api-framework-project.git'
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
                sh 'npm test'
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
