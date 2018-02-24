Installations:
     Provision ICP
     Prerequisite CLIs (kubectl)
     Docker certificate

1. Build, tag and push an image to ICP image registry.
2. Run and expose deployment
3. To find the port used on that worker node, examine your new service: 

   ```kubectl describe service <name-of-deployment>```

You can now access your container/service using `curl <public-IP>:<nodeport>` (or your favorite web browser).
If you see, "Hello ......You're done!

Note:
1. To remove the deployment, use `kubectl delete deployment hello-world`. 
2. To remove the service, use `kubectl delete service hello-world`.
