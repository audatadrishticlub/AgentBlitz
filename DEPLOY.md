# Deployment Guide

This project is configured to automatically deploy to GitHub Pages.

## Prerequisites
Ensure you have committed all changes to your Git repository and pushed to your remote origin.

## How to Deploy
1. Run `npm run deploy`

This command will automatically run `npm run build` (via the `predeploy` script), package your application, and push it to the `gh-pages` branch on your GitHub repository.

Once pushed, go to your GitHub repository settings -> Pages, and ensure the source is set to deploy from the `gh-pages` branch.
