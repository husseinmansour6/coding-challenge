# Submission Notes

The client wants to create a web app that allows users to browse and view breweries.

There are two functions for the user:
1- Browse the breweries.
2- View their data.

To get the breweries we have to send a request to the server by doing a fetch request to this API: https://api.openbrewerydb.org/breweries.

So in the home page:

---

-   I have added the fetch request in a function called componentDidMount() in order to get all breweries when the page is loaded.

-   I have declared a variable in the state to store the responsed data in it.

-   Now I have the data, I want to show them in a simple way. I have created a function called generateTable() to generate the data, by using map function, in a table and view them.

-   Now the table has been generated and the data has been shown, I have to add a link to each brewery's name in order to view the data. This link will redirect the user to another page called viewBreweryData.

-   Viewing the data needs an Id to know which brewery is being viewed. So I have to add the brewery's id in the request link to be able to access it in the viewBreweryData page.

In the viewBreweryData page:

---

-   Because I didn't use redux to store the responsed data from the first request, in order to use them later without sending another fetch request to the server, I have added another fetch in componentDidMount() in order to get the data of a clicked brewery.

-   The fetch request is to this API: https://api.openbrewerydb.org/breweries/ + Id

-   After getting the responsed data, I can now show them in anyway I want. So to make this simple I just added them to "h3" tag.

---
