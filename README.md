# The bugs that have been solved here are as follows:
1. First, add the node_modules file to the drive link that I got.
2. Then first install react-toastify. Due to this, some problems are solved.
3. Here comingSoon file does not use export default, that’s wrong which I fixed.
4. The data fetch URL link given in the subscriptonForm does not validate. Because of this, I create a server-side folder where I do the back-end code, and store the data in MongoDb, the email of those who will subscribe by email.
5. headers: {
        'Content-Type': 'application/json'
      },
There was something wrong, Content-Type was written in upper case, I fixed it to be lower case.
6. There was some mistake in sending the data found here by converting it to res.json to the hitToast file, so I handled the task of toast nicely here.

