---
lang: en-US
title: Getting Started
editLink: true
---

# Getting Started
This page contains some helpful hints about getting started with your involvement on the OHDSI TAB.

### Contributing to this Site

1. **Clone the Repository**  
    Clone the site and create a fork for your updates:  
    ``` shell
    git clone https://github.com/ohdsi/TAB
    ```

2. **Install Dependencies**  
    Install the required npm packages:  
    ``` shell
    npm install
    ```

3. **Test Your Edits Locally**  
    Test your edits locally with:  
    ``` shell
    npm run docs:dev
    ```

4. **Build the Updated Site Locally**  
    Build the updated site locally with:  
    ``` shell
    npm run docs:build
    ```

5. **Commit Your Changes**  
    After making your updates, stage and commit your changes using the following commands:  
    ```shell
    git add .
    git commit -m "Describe your changes here"
    ```

6. **Push Your Changes**  
    Push your changes to your forked repository:  
    ```shell
    git push origin <your-branch-name>
    ```

7. **Open a Pull Request**  
    - Navigate to the original [OHDSI TAB repository](https://github.com/ohdsi/TAB).
    - Click on the "Pull Requests" tab.
    - Click the "New Pull Request" button.
    - Select your fork and branch as the source, and the `main` branch of the original repository as the target.
    - Provide a clear title and description for your pull request.

8. **Submit the Pull Request**  
    Review your changes and click "Create Pull Request" to submit it for review.

9. **Respond to Feedback**  
    Be prepared to address any comments or requested changes from the repository maintainers.
