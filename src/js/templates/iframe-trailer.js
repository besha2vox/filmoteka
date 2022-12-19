export function trailerTemplate(trailer) {
  return `
    <iframe
            class="trailer"
      width="350"
      height="197"
      src="https://www.youtube.com/embed/${trailer}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
}
