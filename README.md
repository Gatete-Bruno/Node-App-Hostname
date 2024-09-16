# DevOps Test #

` IMPORTANT NOTE`   
    We really want to see docker/kubernetes skills, so the choice of other tools (programming language, ansible/other configuration management tool, etc.) is up to you.

``` By the time you receive these instructions, you should already have received admin credentials to a test server with a public IP. The server already has kubernetes installed. If this is not the case, please contact us immediately```

### (2 points) ###
    Write a simple program in any language you want that outputs

    {"hostName":"%HOSTNAME%","success":true}

    (HOSTNAME should be the actual host name on which the app is running) in response to a GET API Request (to “/”, with no additional URI path).

### (1 point) ###
    Write a dockerfile that will run your app.

### (1 point) ###
    Create the YAML files required for deploying the pods to kubernetes, and place them in a directory called deployment.

### (1 point) ###
    Expose your app on port 30200
    (required) Submit your scripts using this github repository. Ensure that when you submit your scripts, the server is available and responding to requests.


### (3 points) ###
    Add a second container with a database technology of your choice such that the database counts the number of times the GET API has been hit; add this information to the API. The api should now return 
        {"hits":1,"hostName":"%HOSTNAME%","success":true}

### (1 point) ###
    Write a liveness probe to check that the App is online and restart the container if it is not.

### (1 point) ###
    Ensure that the database is not lost when the application is stopped


## Testing your solution

Replace the url variable in the .env file with the url of your server. Then run

``` 
npm install
npm test
```


`SUPER IMPORTANT!!!! Make sure to upload the .env file with your application url (<IP_ADDRESS>:30200) to github as your final solution.`

## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/ad197652-6888-4a14-b97b-e1a2822d172f" target="_blank">this screen</a>.