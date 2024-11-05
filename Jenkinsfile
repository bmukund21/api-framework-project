pipeline {
    agent { label 'my-ec2-instance' } // Specify the label of your EC2 instance

    environment {
        PATH = "$PATH:/home/ubuntu/.nvm/versions/node/v22.11.0/bin"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install dependencies with npm
                sh '''
                ./venv/bin/activate && npm install
                npx playwright install
                '''
            }
        }

        stage('Run API Tests') {
            steps {
                // Run the tests using npx playwright test
                sh 'npx playwright test'
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
