# Generated by Django 4.2.2 on 2023-07-18 15:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_alter_myusers_picture'),
    ]

    operations = [
        migrations.DeleteModel(
            name='OneTimeCode',
        ),
    ]