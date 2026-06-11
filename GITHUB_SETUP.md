# GitHub Setup Instructions

## Steps to Push Your Project to GitHub

### Option 1: Create New Repository on GitHub (Recommended)

1. **Go to GitHub and create a new repository:**
   - Visit https://github.com/new
   - Repository name: `web-enhanced`
   - Description: "A modern responsive website with scroll-triggered animations"
   - Choose Public (for the GitHub link)
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Get your repository URL:**
   - Copy the HTTPS URL (e.g., `https://github.com/yourusername/web-enhanced.git`)

3. **Push your local repository:**
   
   Open command prompt/terminal in the project directory and run:

   ```bash
   # Add the remote repository
   git remote add origin https://github.com/yourusername/web-enhanced.git
   
   # Rename branch to main (if needed)
   git branch -M main
   
   # Push to GitHub
   git push -u origin main
   ```

### Option 2: Using Git Command Line (Step by Step)

1. **Make sure you're in the project directory:**
   ```bash
   cd "c:\Users\Neil Marturillas\Desktop\Folders\Miss Bemmy\Prefinal"
   ```

2. **Add remote origin:**
   ```bash
   git remote add origin https://github.com/yourusername/web-enhanced.git
   ```
   
   Replace `yourusername` with your actual GitHub username!

3. **Verify the remote was added:**
   ```bash
   git remote -v
   ```

4. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```
   
   If your branch is named "master" instead:
   ```bash
   git push -u origin master
   ```

### Troubleshooting

**Authentication Error?**
- GitHub requires token-based authentication
- Generate a Personal Access Token:
  1. Go to GitHub Settings → Developer settings → Personal access tokens
  2. Generate new token with "repo" scope
  3. Use the token instead of your password when pushing

**"fatal: remote origin already exists"?**
- Run: `git remote remove origin`
- Then add the correct remote again

**Branch name issue?**
- Check your current branch: `git branch`
- Rename if needed: `git branch -M main`

## Getting Your Repository Link

Once pushed successfully, your repository URL will be:
```
https://github.com/yourusername/web-enhanced
```

You can also find it by going to your GitHub profile → Repositories → web-enhanced

## Next Steps

1. Share your repository link in your submission
2. Others can view your project: `https://github.com/yourusername/web-enhanced`
3. Optional: Set up GitHub Pages to host your website:
   - Go to repository Settings
   - Under "GitHub Pages", select "main" branch
   - Your website will be live at: `https://yourusername.github.io/web-enhanced`

## Verify Your Setup

Check that everything is committed and pushed:
```bash
git status          # Should show "nothing to commit, working tree clean"
git log --oneline   # Should show your commits
git remote -v       # Should show your GitHub remote
```

---

**Your project is ready! 🎉**
