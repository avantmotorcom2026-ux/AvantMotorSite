# Netlify CLI Deployment Commands

# If you don't have Netlify CLI installed, install it first:
npm install -g netlify-cli

# Then navigate to the dist folder and deploy:
cd "c:\Antigravity - AMC - Website\website\dist"

# Login to Netlify (this will open a browser for authentication)
netlify login

# Deploy the site
netlify deploy --prod

# Follow the prompts:
# - Choose "Create & configure a new site" or select existing site
# - Choose your team
# - Enter site name (or leave blank for random name)
# - Publish directory: . (current directory)

# The CLI will upload your site and give you the live URL!
