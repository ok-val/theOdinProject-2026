# Backend server-side framework

Source:

- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks

Both client and server-side code use frameworks to speed up developments
and tackle known problems. As their domains, challenges, and scope of
focus are fundamentally different, their frameworks differ as well!

Just like how client-side web frameworks simplify layout and automate
renderings, server-side web frameworks deal with data and logic
functionalities that I might otherwise have to implement myself such as
authentication, database access, templating libraries.

However, in contrast with client-side web frameworks where frameworks
are optional based on the complexity of the website, server-side web
frameworks are almost always recommended even for a small website with 1
functionality.

This is mainly because most backend funtionalities such as
authentication or HTTP server creation are much harder to implement from
scratch than frontend interact features.

> To sum, Web frameworks provide tools and libraries to simplify common
> web development operations so that you don't have to create everything
> from scratch every time. So what are some common web developement
> operations?

- Simplifiy the syntax that allows working directly with HTTP requests
  and responses as well as their embedded data
- Route requests to the appropriate handler, improving maintainability
- Streamline database access by providing a Object-Relational Mapper
  (ORM) layer for SQL or Object Data Mapper (ODM) layer for NoSQL
- Render pages dynamically

## Criteria for selecting a web framework

Read more:
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks

- Primary purpose
- Degree of control
  - opinionated vs unopinionated
  - plugins
- Learning curve
- Effectiveness (amplify effort)
- Efficiency (streamline effort)
- Security
- Speed
- Caching/Memoization support
- Scalibility
- Baggage (size)
- Strength good practice

## Simplifying server-side programming with frameworks

For the steps enumerated in [intro-to-backend](intro-to-backend.md) and
[static-vs-dynamic-sites](static-vs-dynamic-sites.md), server-side web
frameworks make writing code to handle those operations much easier.

One of the most important operations they perform is routing the URLs to
their respective handler functions or middleware.

A Python-based web framework like Django provides some helpful native
APIs for this:

```python
from django.conf.urls import url
from django.shortcuts import render

from .models import Team
from . import views

# routing patterns
urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]

# fetching from database
def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```
