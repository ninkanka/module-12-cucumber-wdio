pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }
        stage('UI tests') {
            steps {
                bat 'npm run test:smoke'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'reports/junit/*.xml'
            archiveArtifacts artifacts: 'reports/**', allowEmptyArchive: true
        }
    }
}