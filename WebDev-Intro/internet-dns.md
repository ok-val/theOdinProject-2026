Say hell yeah to these guys at MDN: [What is a Domain Name? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name#how_does_a_dns_request_work)


> [!definition] Domain Name System
> DNS is the internet's phonebook, mapping DNs and IPs.  
> 
> ![[Pasted image 20260404171829.png | 500]]

## Why we need it?

IP is not for human, a domain name is.
A domain name can be registered along with other information about the domain owner.

## How does it work? 

We enter a website like `mozila.org`.  
The browser asks the computer: Given this DN, do you recognize this IP?
Computer looks in its bag --- **DNS cache**.
If yes, request follows the routers to the server. The end.

If no, computer (OS) performs **DNS lookup** (a hosted phonebook), 
looks for IP using the DN,
returns and store IP in DNS cache
(until we flush the DNS of course)

**This process is called a DNS lookup.**

## DNS lookup

There are four server types in this process:
* **Resolving** name server
* **Root** name server
* **TLD** name servers
* **Authoritative** name servers

OS first goes to **Resolving** NS. This NS is part of the OS.
**Resolving** NS is the work horse that runs around to ask questions.
If it has the answer, the end. 
If not, it goes to the **Root** name server.

The Root directs the Resolving to the **TLD (Top-Level Domain)** NS, in which the COM name server (if `.org` is the case) is a member.
We can simply call this member **ORG TLD** name server. 

Resolving now goes to the **Authoritative** NS --- where all registered DN--IP phonebook thingy is registered. This registration process is done with the Domain Registrar (sounds like HR).




