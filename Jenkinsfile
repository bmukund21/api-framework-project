pipeline {
    agent {
        label 'my-ec2-instance' // label for the EC2 instance
    }
    tools { nodejs "22.1.0" } // Node.js version as configured in Jenkins
    stages {
        // stage('Set Permissions') {
        //    steps {
        //        // Set permissions for Jenkins user on the ec2-user directory
        //        sh 'sudo chmod -R +rw /home/ec2-user/'
        //    }
        //}
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies and Playwright
                sh '''
                    #cd ${JENKINS_HOME}/${JOB_BASE_NAME}
                    pwd > /tmp/pwd-check
                    npm install
                    npx playwright install
                '''
            }
        }

        stage('Run API Tests') {
            steps {
                // Run tests using npx
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
