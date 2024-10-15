from django.db import models

class Post(models.Model):
    name = models.CharField(max_length=100)  # Corrected from charField to CharField
    email = models.EmailField(max_length=255)  # Corrected from emailField to EmailField
    srn = models.CharField(max_length=100, unique=True)  # Corrected from charField to CharField

    def __str__(self):
        return self.name
