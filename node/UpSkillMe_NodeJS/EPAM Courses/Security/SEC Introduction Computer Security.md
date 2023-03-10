
Links:
- [NET Network Concept](../Cloud%20Overview/NET%20Network%20Concept.md)

Tags: #sci/pro/security #notes/web 

Date: 2022-11-03
Time: 16:15:46
____

Computer security:
- security at rest
- security in transit

Security at rest means that the data is in a stable state: it is not being acted upon by any application and it is not being transmitted over the network.
Security in transit, as the name implies, means that the data is being transmitted over the network. Password hashing, encryption, and secure communications are basic methods to achieve computer security.


## Passwords
A password is a string of characters used to confirm the identity of a user.

Several organizations have released various guidelines on strong passwords. Most common advice is:
- A minimum password length should be 10
- Use lowercase and uppercase characters, numbers, and symbols
- Do not use the same password for different accounts
- Avoid dictionary words and any information which might be associated with the user (names, dates)

A reasonable compromise is to use a password manager program which securely stores all your passwords. It has a master password to open its database and this password should be a strong randomly generated one which you will have to remember.

#### Threats
So far, we assumed that the attacker would try all possible combinations of symbols to find the password. Such attacks are called **brute-force attacks**. In fact, a more common attack is a **dictionary attack**.

Another threat is that the attacker may get access to the system storing passwords.

To prevent that, a technique called **password hashing** is used. Modern systems almost never store passwords as plain text; they store a **hash** of a password instead. The hash is a result of applying a one-way function to a password. The one-way function is a function which is easy to compute on every input, but hard to invert given the result.

One of the most used and well-known hashing algorithm families is a *SHA (Secure Hash Algorithm)*. SHA usually has a number after its name to indicate the variant being used.

A hash is essentially a fixed-size image of an input string which can be of any length. An important property of hash functions is that it should be *virtually impossible* to find two input strings which would produce the same hash, but this is still possible because it maps a larger set to a smaller one.
Older versions of hashing algorithms (SHA-1 and MD5) are no longer widely used because such collisions were found.

## Secure Communications
Secure communications take place when the parties want to communicate without the third party being able to listen to them. The two primary methods for encryption used in computer systems are *symmetric* and *asymmetric*.

#### Symmetric
In symmetric encryption, the same key is used for encryption and decryption. The key should be somehow passed to both parties beforehand via a secure method.

Example: XOR processed communication
1. A: write message
2. A: XOR it with the pass
3. A: send encrypted message
4. B: get encrypted message
5. B: apply the same XOR processing with the pass
6. B: decrypt the message

XOR operations, among others, are used in the *AES (Advanced Encryption Standard)* which is the most widely used symmetric encryption nowadays.

#### Asymmetric
In asymmetric encryption (also known as *public-key*), there are two keys: *public and private*. Each party generates its own pair of keys:
- A *public key* is used *for data encryption* and it is shared to everyone.
	- Anyone who wants to send an encrypted message to the owner of a pair of keys uses the recipient’s public key to encrypt the message.
- A *private key* is used *for data decryption* and is kept *secret*.

The combination of a public and a private key is called a key pair. The public and private key are *mathematically related* in such a way that even if one knows the public key, it is almost *impossible to discover the private key*.
Even if the attacker intercepts the message, it is impossible to decrypt it using the public key only.

One of the most popular public key cryptosystems is *RSA*. It is based on a fact that *it is hard to factor the product of two large prime numbers*.

A part of a public key is a number which is a product of two prime numbers. The prime factors are never shared to the public, and one of them is a part of a private key. One of the disadvantages of asymmetric encryption is that generating keys and encrypting messages is much slower compared to symmetric encryption.

In practice, asymmetric encryption is often used only to establish the connection between two parties and *obtain a common key for symmetric encryption*.

## TLS
*TLS (Transport Layer Security)* - cryptographic protocol designed to provide secure communications over a computer network. Its predecessor is *SSL (Secure Sockets Layer)*. It utilizes both symmetric and asymmetric encryption.

the TLS is *between the Transport and the Application layers*.

The main three functions of TLS are:
>[!info]- Encryption
> To establish a secure channel, both parties should agree on the encryption method.
> TLS uses asymmetric encryption to obtain a common encryption key for symmetric encryption.

>[!info]- Authentification
> On the handshake stage, both parties may check the identity of each other.

>[!info]- Integrity
> Each message includes *MAC (Message Authentication Code)*. This is a result of a one-way hash function. The parameters of this function are known only to communicating parties.

#### Process of TLS handshake
Before any data is sent using TLS, a client and a server should agree on the version of a protocol, the encryption method, and check each other’s identity if necessary. This process is called a *TLS handshake*.

1. A TCP connection is established between a client and a server.
2. client to server:
	1. version of the protocol they want to use
	2. supported encryption methods, and other options.
	3. This data is not encrypted.
3. The server approves the protocol version, chooses the encryption method, and sends its certificate to the client. The certificate can be verified by the client using *Certificate Authority*. It is the third party trusted by both the client and the server.
4. The protocol version and the encryption method at this stage are approved by both parties. Asymmetric encryption is used to establish the key of symmetric encryption.
5. The server sends an encrypted “Finished” message to the client using the established key. It also verifies the message from the client by using MAC.
6. The client decrypts the message, checks MAC. If there are no issues, the connection is considered to be established and the data transmission can be started.

##### session identifiers
A TLS handshake is a time-consuming process. During the TLS handshake the server may send a 32-bit session identifier to the client.

The use of *32-bit session identifiers* allows to avoid the overhead of asymmetric encryption and reestablish the connection quickly. In this case, the server saves session parameters corresponding to the identifier, so the client may resume the session.

#### Further reading
1.  Read the [Wikipedia article](https://en.wikipedia.org/wiki/Password_strength) to learn more about password strength.
2.  Use the [Diceware website](https://theworld.com/~reinhold/diceware.html) to create strong passwords if you like this technique.
3.  Read the [Wikipedia article](https://en.wikipedia.org/wiki/Public-key_cryptography) on public key cryptography for more details.
4.  The [TLS chapter](https://hpbn.co/transport-layer-security-tls/) from High Performance Browser Networking book is a great further reading on TLS.

