  
Links:
- [Previous](EPAM%20Git%2000%20Course%20introduction.md)
- [Next](EPAM%20Git%2002%20GitHub,%20GUI%20and%20basic%20commands.md)

Tags: #notes/web #sci/pro/tech/git #pcfix/tool/utility

Date: [20230203](../../../200%20Diary/205%20Day/20230203.md)
Time: 17:09:10
_____

#### Download
Go to the git website, install, download and install the most recent version.

After the installation we also installed Git Bash, command prompt to use the Linux commands.

#### Configuring
##### Getting keys
```bash
ssh-keygen -t name_of_key -C "arcadii.sem@gmail.com"

# If it s asking to enter the passphrase 
# Enter a simple one, so you can type it in minute.

# For this course it is "ssap".
```
We create public and private keys, after that we should send the public key to the place we need to use it. Never and ever share the private key to anyone, because it is like a signature.

Add the SSH key to your GH profile and paste the public key into the text box.

##### Set user data
```bash
# Set your email address as in the account
git config --global user.email

# Set your username as in the account
git config --global user.name
```

