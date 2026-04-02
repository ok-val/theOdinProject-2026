## Why good commits matter

A good git commit is well-crafted to **communicate intent and context** to other fellow devs. Communication is important for collaboration. So, the commit message shows whether a developer is a good collaborator.  

Read more [here](https://cbea.ms/git-commit) 

## Bad commit

`fix a bug` is a bad commit message. It doesn't address how and why. 


## Good commit rules

1. **Separate subject from the body with a blank line**
	All commits need a subject, but not necessarily a body, especially for when the context is so simple, explaining would be redundant. Instructions for setting up a text editor with Git at CLI is [here](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration).
	
	In any case, separate the subject and body (if needed):

```
subject
%% blank line %%
body text
```

2. **Limit the subject line to 50 chars**
	Not a hard limit, just a rule of thumb. If the changes cannot be described within this limit. Consider commit more atomically or frequently. 

3. **Capitalize the Subject line**
	✔ `Reorder function call for xyz() after abc()`

4. **Preclude period in the subject line**
	Space is already limited; do not add ending period to subject line. This makes no sense anyways... Why would subjects need period?

5. **Use imperative verb in subject line**
	Like how these rules have been written, commit subject should be all written in active voice. Never use passive voice. 
	
	This also means that I *should NOT use indicative verbs* like:
	❌`Fixed bug` or `Changing` 
	
	It also means to never use described objects:
	❌ `More fixes` or `Updates for files`

5. **Wrap body text at 72 chars (manually)**
	Just mind the right margin and enters line break manually. This is interesting...

6. **Use the body to explain what and why vs. how**
	Most importantly is the why (since the subject should already has covered the what). Give a summary for how with pointers towards certain code blocks if needed. 
