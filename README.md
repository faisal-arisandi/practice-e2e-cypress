# Practice End-to-End Testing Using Cypress

## 1. Preparation
- Use Node version 22.
  If you are using nvm, use this command below:
  ```
  nvm use 22
  ```
- Install dependencies by running this command:
  ```
  npm install
  ```

## 2. Running the E2E Testing
- Running the test using this command:
  ```
  npm run cy:run
  ```
  Wait until the process is finished. This will generate the video recording of the test that will be located in `cypress/videos/spec.cy.js.mp4`

## 3. Modifying the E2E Testing
There are various ways to modify the e2e test:
1. By update the file `cypress/e2e/spec.cy.js` directly.
2. By using Cypress Studio to record all the actions perform to the page.

#### 3.1 Using Cypress Studio
- Run this command below:
  ```
  npm run cy:open
  ```
  This will open the Cypress App.
- On the **Welcome to Cypress!** page, choose **E2E Testing**
- On the **Choose a Browser** page, choose **Chrome** and click button **Start E2E Testing in Chrome**.
  This will open new Chrome browser for the testing. 
- On the left sidebar, choose menu **Specs**
- Click the file name `spec.cy.js`. This will automatically run the existing E2E test
- On the left side, there is a testing name `Contact Slash flow test` with an arrow icon. Click this arrow icon to open Cypress Studio.
  This will open the Cypress Studio and automatically run the existing E2E test once again
- Once the test is finished, you can see on the top right there is a red button **Recording**. This indicates the Cypress Studio will record any action you perform on the page in the center.
For example, if you click a button or fill a form, this action will be recorded.
If you click button **Save**, this new action will update the existing spec file.
