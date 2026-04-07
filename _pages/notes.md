---
layout: page
permalink: /notes/
title: University Notes
description: Lecture notes from the courses I have taken at Sapienza University of Rome.
nav: true
nav_order: 6
---

<div class="projects">
  <div class="grid">
    {% for note in site.data.notes %}
      <div class="grid-item">
        <a href="{{ '/assets/pdf/notes/' | append: note.pdf | relative_url }}" target="_blank">
          <div class="card hoverable">
            {% if note.image %}
              <img src="{{ '/assets/img/notes' | append: note.image | relative_url }}" 
                   class="card-img-top" 
                   alt="{{ note.title }}">
            {% endif %}
            <div class="card-body">
              <h2 class="card-title text-lowercase">{{ note.title }}</h2>
              <p class="card-text">{{ note.description }}</p>
              {% if note.semester %}
                <p class="card-text"><small class="text-muted">{{ note.semester }}</small></p>
              {% endif %}
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>