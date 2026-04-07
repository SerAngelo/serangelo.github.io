---
layout: page
permalink: /notes/
title: University Notes
description: Lecture notes from the courses I have taken at Sapienza University of Rome.
nav: true
nav_order: 6
---

<style>
  .notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .notes-grid .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .notes-grid .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .notes-grid .card-img-wrapper {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  .notes-grid .card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .notes-grid .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .notes-grid .card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .notes-grid .card-text {
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }

  .notes-grid .card-footer {
    margin-top: auto;
    font-size: 0.75rem;
    color: #888;
    padding-top: 0.5rem;
  }

  .notes-grid a {
    color: inherit;
    text-decoration: none;
  }

  .notes-grid a:hover {
    text-decoration: none;
  }
</style>

<div class="notes-grid">
  {% for note in site.data.notes %}
    <a href="{{ '/assets/pdf/notes/' | append: note.pdf | relative_url }}" target="_blank">
      <div class="card hoverable">
        {% if note.image %}
          <div class="card-img-wrapper">
            <img src="{{ '/assets/img/notes/' | append: note.image | relative_url }}" alt="{{ note.title }}">
          </div>
        {% endif %}
        <div class="card-body">
          <h2 class="card-title">{{ note.title }}</h2>
          <p class="card-text">{{ note.description }}</p>
          {% if note.semester %}
            <p class="card-footer">{{ note.semester }}</p>
          {% endif %}
        </div>
      </div>
    </a>
  {% endfor %}
</div>