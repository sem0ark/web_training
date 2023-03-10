
Links:
Tags: #sci/pro/tech/devops

Date: 2022-11-03
Time: 19:59:30
____

**DevOps** is a term that comes from combining the parts of words “development and operations”. DevOps is a set of practices that bridges the gap between software development and IT operations.

![Pasted image 20221103200228](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103200228.png)

1. A developer pushes code.
2. CI server automatically builds an application and runs tests.
3. It stores any artifactory outcome from the build.
4. It deploys binaries to any given environment.
5. It promotes deployment to production without final manual approvement.

**Continuous Integration (CI)** is a development practice where developers integrate code into a shared repository frequently, at least one time a day. Automated tools are used to assert the code being pushed to the repository.

Benefits and goals:

-   Scale up headcount and delivery output of engineering teams. It minimizes the communication overhead between different teams. Every developer is working on the same version of code to make sure that the feature they are working on will smoothly integrate into the codebase.
-   Faster feedback from product teams. The product team may review the result before a special release build is prepared for them to review.
-   Harder to break the codebase. Issues are caught earlier using automated tests that run on every push of new code to the repository.
-   Improves communication and collaboration. Since every developer is working on the up-to-date version of the code, they can see changes made by other developers and communicate if needed.

## CI/CD

**Continuous Delivery (CD)** -> code changes can be deployed automatically to a testing or production environment after the build stage.

*Benefits and goals*:
- Deploying software to a testing or production environment - *pain*. CI/CD tools solves automatically a time-consuming task if done by hand.
- Releases can be done more often. This allows the customer to give feedback faster.

**Continuous Deployment (CD)** -> fully-automated software release process. If any changes made to the codebase pass the automated testing, the product is released to the customers.

Continuous deployment and continuous delivery are both abbreviated as CD and may look similar because of the nomenclature. The key difference between them is that *in delivery, there is a manual approval* step before production release.

*Benefits and goals*:
- The fastest possible releases to the customers.
- Easy-to-fix releases as the changes are very small.

### Tools for CI / CD

>[!tip]- GitLab
> The environment allows you to manage project repositories, document functionality and the results of improvements and tests, as well as track errors and work with the CI / CD pipeline.

>[!tip]- Docker
> The system for automatic deployment of projects. Supports containerization and allows you to package a project along with all the environment and dependencies into a container that can be ported to a Linux system.

>[!tip]- Travis-CI
> The tool connects to repositories on GitHub with a minimum configuration. The solution is cloud-based and does not require local installation. Plus, it's free for open source projects.

>[!tip]- Circle-CI
The product also uses seamless integration with GitHub. A web interface is provided for tracking assembly versions and maintaining tasks. The solution also supports sending notifications by mail, slack and other communication channels.

>[!tip]- Jenkins
> Quite a popular tool in DevOps environment. It has earned its reputation for working with various plugins that allow flexible customization of CI / CD processes for the requirements of a specific product development.

>[!tip]- PHP Censor
> A CI server for automating the assembly of PHP projects, working with repositories GitLab, GitHub, Mercurial, etc. For testing, libraries Atoum, PHP Spec, Behat, etc. are used. The project is well-documented but assumes self-configuration and hosting.

>[!tip]- Rex
> Designed to automate CI processes in data centers. Works in Perl scripts.

>[!tip]- Open Build Service (OBS)
> Designed to automate CI / CD in the development of application distributions.

>[!tip]- Buildbot
> The CI system for automating the assembly and testing applications. Supports modern VCS and allows flexible customization of the assembly due to Python components.


Many teams which use CI / CD pipelines in the clouds use containers like [Docker](../../../003%20Media/Docker.md) and orchestration systems like [Kubernetes](Kubernetes). Containers help to standardize packaging and delivery, and to simplify scaling and destruction of volatile environments.

There are many options for sharing containers, infrastructure as code, and CI / CD pipelines. You can learn more about this in the articles [Kubernetes with Jenkins](https://medium.com/containerum/configuring-ci-cd-on-kubernetes-with-jenkins-89eab7234270) and [Kubernetes with Azure DevOps](https://cloudblogs.microsoft.com/opensource/2018/11/27/tutorial-azure-devops-setup-cicd-pipeline-kubernetes-docker-helm/).

Serverless computing architecture is another way to deploy and scale applications. In a serverless environment, the infrastructure is completely managed by the cloud provider, and the application consumes resources as needed according to its settings.

#### References
1. https://www.infoworld.com/article/3204171/what-is-docker-the-spark-for-the-container-revolution.html
2. https://www.infoworld.com/article/3268073/what-is-kubernetes-your-next-application-platform.html

#### Further reading
1.  Read [A beginner's guide to everything DevOps](https://opensource.com/article/20/2/devops-beginners) to read more about DevOps methods, frameworks, and tools.
2. You can find more about Web application architecture in the [article](https://www.spaceotechnologies.com/web-application-architecture/) on spaceotechnologies.com.