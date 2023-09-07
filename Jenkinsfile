pipeline {
  agent any
  stages {
    stage('Clean') {
      steps {
        sh 'rm -rf $WORKSPACE/*'
        echo 'Workspace clean successfully'
      }
    }

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        script {
          sh 'npm install'

          sh 'npm run build'

          archiveArtifacts 'dist/**'
        }

      }
    }

    stage('Deploy') {
      steps {
        script {
          def currentBranch = env.BRANCH_NAME
          echo "Current branch: ${currentBranch}"

          if (currentBranch == 'master') {
            echo 'Deploying...'
            sh 'rm -rf /var/www/html/projects/calculator-app'
            sh 'mv dist/* /var/www/html/projects/'
            sh 'sudo service apache2 restart'
          } else {
            echo 'No master branch. There wont be any deployment.'
          }
        }

      }
    }

  }
  post {
    always {
      sh 'rm -rf $WORKSPACE/*'
      echo 'Workspace clean successfully'
    }

  }
}
