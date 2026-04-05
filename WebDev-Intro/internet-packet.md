All data across the internet is transferred as packets.
Packets are data chunks. 

A packet contains a:
* **Header:** includes transmission details, such as the server and client IP address, the packet number, the total number of packets, and other details of the transmission protocols.
* **Payload:** the actual data being sent

## Why are data sent in small packets?

* **Missing or corrupted packets** can be traced and requested rather than the entire file.
* **Multi-path sending:** The packets can be routed along multiple paths, making transmission more efficient, rerouting wherever possible to avoid bottlenecks. 

