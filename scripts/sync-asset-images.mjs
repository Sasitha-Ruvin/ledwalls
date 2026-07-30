/**
 * Copies source files from assets/ to public/images/portfolio/ with SEO-friendly filenames.
 * Source folders keep original names; published site uses public/images/ paths.
 *
 * Run: node scripts/sync-asset-images.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const FOLDERS = [
  {
    srcDir: "assets/award_ceremonies",
    destDir: "public/images/portfolio/led-wall",
    prefix: "led-wall-award-ceremony-sri-lanka",
    category: "award-ceremony",
    altLabel: "Award ceremony LED wall rental",
  },
  {
    srcDir: "assets/concerts",
    destDir: "public/images/portfolio/led-wall",
    prefix: "led-wall-concert-stage-sri-lanka",
    category: "concert",
    altLabel: "Concert LED screen rental",
  },
  {
    srcDir: "assets/coporate",
    destDir: "public/images/portfolio/led-wall",
    prefix: "led-wall-corporate-event-sri-lanka",
    category: "corporate",
    altLabel: "Corporate LED wall rental",
  },
  {
    srcDir: "assets/weddings",
    destDir: "public/images/portfolio/led-wall",
    prefix: "led-wall-wedding-backdrop-sri-lanka",
    category: "wedding",
    altLabel: "Wedding LED backdrop rental",
  },
  {
    srcDir: "assets/stage",
    destDir: "public/images/portfolio/stage",
    prefix: "stage-truss-setup-sri-lanka",
    category: "stage",
    altLabel: "Stage and truss setup rental",
  },
  {
    srcDir: "assets/podiums",
    destDir: "public/images/portfolio/podium",
    prefix: "digital-podium-rental-sri-lanka",
    category: "podium",
    altLabel: "Digital podium rental",
  },
];

const IMAGE_EXT = /\.(webp|jpe?g|png)$/i;

function listImages(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b));
}

function extOf(filename) {
  const m = filename.match(IMAGE_EXT);
  return m ? m[0].toLowerCase() : ".webp";
}

const manifest = [];

for (const folder of FOLDERS) {
  const files = listImages(folder.srcDir);
  const destRoot = path.join(ROOT, folder.destDir);
  fs.mkdirSync(destRoot, { recursive: true });

  files.forEach((file, index) => {
    const num = String(index + 1).padStart(2, "0");
    const ext = extOf(file);
    const destName = `${folder.prefix}-${num}${ext}`;
    const srcPath = path.join(ROOT, folder.srcDir, file);
    const destPath = path.join(destRoot, destName);
    fs.copyFileSync(srcPath, destPath);

    const publicPath = `/${folder.destDir.replace(/^public\//, "")}/${destName}`;
    manifest.push({
      src: publicPath.startsWith("/images") ? publicPath : `/images/${publicPath.replace(/^\//, "")}`,
      alt: `${folder.altLabel} Sri Lanka by YC Events`,
      category: folder.category,
    });
  });
}

const outPath = path.join(ROOT, "lib/data/gallery-manifest.json");
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Synced ${manifest.length} images → public/images/portfolio/`);
console.log(`Manifest: lib/data/gallery-manifest.json`);
