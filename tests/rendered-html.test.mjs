import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function html(route) {
  return readFile(new URL(`../.next/server/app/${route}.html`, import.meta.url), "utf8");
}

test("production pages render portfolio content and project navigation", async () => {
  for (const route of ["index", "work", "about", "experience", "resume", "contact"]) {
    const content = await html(route);
    assert.match(content, /Madina Batoshova/);
    assert.match(content, /Projects/);
    assert.doesNotMatch(content, /Your site is taking shape/);
  }
});

test("resume exposes both downloads and certificate verification links", async () => {
  const content = await html("resume");
  assert.match(content, /TypeScript, and JavaScript/);
  assert.match(content, /href="\/Madina-Batoshova-Resume.pdf" download/);
  assert.match(content, /href="\/Madina-Batoshova-Resume.docx" download/);
  assert.match(content, /href="https:\/\/www.coursera.org\/account\/accomplishments\/professional-cert\/0U071BZMU6LE"/);
  assert.match(content, /href="https:\/\/omp.aistudy.uz\/certificate\?id=e091401b-4486-47f1-3657-08de85ba2bc4"/);
  assert.doesNotMatch(await html("experience"), /Part-time/);
  for (const extension of ["pdf", "docx"]) {
    const bytes = await readFile(new URL(`../public/Madina-Batoshova-Resume.${extension}`, import.meta.url));
    assert.ok(bytes.length > 1000);
  }
});
