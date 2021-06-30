export const ANGULAR_DATA: Array<{id: number, title: string, desc: string }> = [
    {
        id: 1,
        title: "Modules",
        desc: `Angular NgModules differ from and complement JavaScript (ES2015) modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. An NgModule can associate its components with related code, such as services, to form functional units.

        Every Angular application has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An application typically contains many functional modules.
        
        Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. For example, to use the router service in your app, you import the Router NgModule.
        
        Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability. In addition, this technique lets you take advantage of lazy-loading—that is, loading modules on demand—to minimize the amount of code that needs to be loaded at startup.`,
    },
    {
       id: 2,
       title: "Components",
       desc: `Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

       The @Component() decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.`,

    },
    {
       id: 3,
       title: "Templates, directives, and data binding",
       desc: `A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the DOM. There are two types of data binding:

       - Event binding lets your application respond to user input in the target environment by updating your application data.
       - Property binding lets you interpolate values that are computed from your application data into the HTML.

       Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.
       
       Your templates can use pipes to improve the user experience by transforming values for display. For example, use pipes to display dates and currency values that are appropriate for a user's locale. Angular provides predefined pipes for common transformations, and you can also define your own pipes.`,
    },
    {
       id: 4,
       title: "Services and dependency injection",
       desc: `For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.

       Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.`,
    },
    {
       id: 5,
       title: "Routing",
       desc: `The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your application.
       The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies.

       If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand.

       The router interprets a link URL according to your application's view navigation rules and data state. You can navigate to new views when the user clicks a button or selects from a drop box, or in response to some other stimulus from any source. The router logs activity in the browser's history, so the back and forward buttons work as well.

       To define navigation rules, you associate navigation paths with your components. A path uses a URL-like syntax that integrates your program data, in much the same way that template syntax integrates your views with your program data. You can then apply program logic to choose which views to show or to hide, in response to user input and your own access rules.`,
    }
]

export const TEMP_DATA = [
   {
     "name": "Singapore",
     "series": [
       {
         "name": "Jan",
         "value": 25.8
       },
       {
         "name": "Feb",
         "value": 26.2
       },
       {
         "name": "Mar",
         "value": 26.7
       },
       {
         "name": "Apr",
         "value": 27.1
       },
       {
         "name": "May",
         "value": 27.4
       },
       {
         "name": "Jun",
         "value": 27.3
       },
       {
         "name": "Jul",
         "value": 27
       },
       {
         "name": "Aug",
         "value": 26.9
       },
       {
         "name": "Sep",
         "value": 26.9
       },
       {
         "name": "Oct",
         "value": 26.7
       },
       {
         "name": "Nov",
         "value": 26.3
       },
       {
         "name": "Dec",
         "value": 26
       }
     ]
   },
   {
    "name": "Tokyo",
    "series": [
      {
        "name": "Jan",
        "value": 4
      },
      {
        "name": "Feb",
        "value": 5
      },
      {
        "name": "Mar",
        "value": 8.5
      },
      {
        "name": "Apr",
        "value": 13.4
      },
      {
        "name": "May",
        "value": 18.2
      },
      {
        "name": "Jun",
        "value": 21.5
      },
      {
        "name": "Jul",
        "value": 25.3
      },
      {
        "name": "Aug",
        "value": 26.5
      },
      {
        "name": "Sep",
        "value": 23.2
      },
      {
        "name": "Oct",
        "value": 17.7
      },
      {
        "name": "Nov",
        "value": 12.1
      },
      {
        "name": "Dec",
        "value": 6.7
      }
    ]
  },
  {
    "name": "London",
    "series": [
      {
        "name": "Jan",
        "value": 4.8
      },
      {
        "name": "Feb",
        "value": 4.9
      },
      {
        "name": "Mar",
        "value": 6.7
      },
      {
        "name": "Apr",
        "value": 9.4
      },
      {
        "name": "May",
        "value": 12.7
      },
      {
        "name": "Jun",
        "value": 15.7
      },
      {
        "name": "Jul",
        "value": 17.8
      },
      {
        "name": "Aug",
        "value": 17.3
      },
      {
        "name": "Sep",
        "value": 15
      },
      {
        "name": "Oct",
        "value": 11.8
      },
      {
        "name": "Nov",
        "value": 7.8
      },
      {
        "name": "Dec",
        "value": 5.3
      }
    ]
  },
  {
    "name": "New York",
    "series": [
      {
        "name": "Jan",
        "value": -1
      },
      {
        "name": "Feb",
        "value": 0
      },
      {
        "name": "Mar",
        "value": 4.1
      },
      {
        "name": "Apr",
        "value": 10.4
      },
      {
        "name": "May",
        "value": 16
      },
      {
        "name": "Jun",
        "value": 21.3
      },
      {
        "name": "Jul",
        "value": 24.5
      },
      {
        "name": "Aug",
        "value": 23.6
      },
      {
        "name": "Sep",
        "value": 20.1
      },
      {
        "name": "Oct",
        "value": 13.7
      },
      {
        "name": "Nov",
        "value": 7.7
      },
      {
        "name": "Dec",
        "value": 2.5
      }
    ]
  },
  {
    "name": "Sydney",
    "series": [
      {
        "name": "Jan",
        "value": 22.8
      },
      {
        "name": "Feb",
        "value": 22.6
      },
      {
        "name": "Mar",
        "value": 21.3
      },
      {
        "name": "Apr",
        "value": 18.8
      },
      {
        "name": "May",
        "value": 15.8
      },
      {
        "name": "Jun",
        "value": 13.6
      },
      {
        "name": "Jul",
        "value": 12.7
      },
      {
        "name": "Aug",
        "value": 13.5
      },
      {
        "name": "Sep",
        "value": 16
      },
      {
        "name": "Oct",
        "value": 18
      },
      {
        "name": "Nov",
        "value": 19.7
      },
      {
        "name": "Dec",
        "value": 21.4
      }
    ]
  },
 ];
 