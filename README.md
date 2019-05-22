# Chromely.Mvc Demo Application

[Chromely](https://github.com/chromelyapps/Chromely) is a lightweight alternative to Electron.NET, Electron for .NET/.NET Core developers.

[Chromely.Mvc](https://github.com/RupertAvery/Chromely.Mvc) builds on top of Chromely to provide

* MVC's convention-based approach to writing and wiring up controllers.
* .NET Core's built-in IServiceCollection for dependency injection.
* Constructor and property injection on controller classes.
* Routing using annotation on controller action methods with HttpGet, HttpPost, etc.
* Model binding

This demo uses the same code as [Chromely demo projects](https://github.com/chromelyapps/demo-projects) (Currently only the Vue demo), but with changes to show the features of Chromely.MVC.

# Prerequisites

* Visual Studio 2017 (Optional, for Windows)
* .NET Core SDK 2.2
* NodeJS 8.x+

# Building

## Chromely + Mvc + Angular

* From a command line terminal go to `ChromelyMvcAngularDemo\vueapp`
* Run `npm i` 
* Go back to `ChromelyMvcAngularDemo` and run `dotnet build -c "Debug" /p:Platform="x64"`, or open the solution and build it with **Platform set to x64**.

## Chromely + Mvc + Vue

* From a command line terminal go to `ChromelyMvcReactDemo\vueapp`
* Run `npm i` 
* Go back to `ChromelyMvcReactDemo` and run `dotnet build -c "Debug" /p:Platform="x64"`, or open the solution and build it with **Platform set to x64**.

The build process should run `webpack` and package the site before copying it to the output directory.

# Known Issues

Http demos and external controllers don't work. They aren't setup in this demo


