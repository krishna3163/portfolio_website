# Background Video Placeholder

## ⚠️ ACTION REQUIRED

You need to add a background video for the hero section.

### Steps:

1. **Find or create a video**:
   - Use a stock video site (Pexels, Pixabay, Unsplash)
   - Or record your own
   - Recommended: Abstract tech/code animations, or professional workspace

2. **Video specifications**:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 (Full HD) minimum
   - Duration: 10-30 seconds (it will loop)
   - File size: Under 10MB for best performance
   - Aspect ratio: 16:9

3. **Add the video**:
   - Save your video as `hero-bg.mp4`
   - Place it in this folder: `public/videos/hero-bg.mp4`

4. **Alternative**: Use a static gradient
   - If you don't want a video, edit `app/components/Hero.tsx`
   - Replace the `<video>` element with a gradient div

### Suggested Video Sources:

- **Pexels**: https://www.pexels.com/search/videos/technology/
- **Pixabay**: https://pixabay.com/videos/search/coding/
- **Coverr**: https://coverr.co/

### Quick Fix (No Video):

If you want to launch without a video, the component will still work - it will just show a black background. The gradient overlay will remain visible.
