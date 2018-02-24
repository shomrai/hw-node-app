Install Prerequisite CLIs and Provision ICP 

Push an image to IBM Cloud Private...

   ```kubectl expose deployment/hello-world --type="NodePort" --port=8080```

To find the port used on that worker node, examine your new service: 

   ```kubectl describe service <name-of-deployment>```

   Take note of the "NodePort:" line as `<nodeport>`


 You can now access your container/service using `curl <public-IP>:<nodeport>` (or your favorite web browser). If you see, "Hello world! Your app is up and running in a cluster!" you're done!

1. To remove the deployment, use `kubectl delete deployment hello-world`. 
2. To remove the service, use `kubectl delete service hello-world`.
