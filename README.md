# Node.js Server Error Handling Bug

This repository demonstrates a common bug in Node.js servers: improper handling of asynchronous operations that can fail.  The server includes a `fetchData` function that simulates an operation (e.g., database query, network request) which may return `null` to represent failure.  Without proper error handling, this can lead to intermittent 500 Internal Server Errors.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version with robust error handling.

**Bug:** The server doesn't gracefully handle the case where `fetchData()` returns `null`.  This results in an unhandled error and a 500 response.

**Solution:**  The solution implements proper error handling to catch potential failures and respond appropriately.