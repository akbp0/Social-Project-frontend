# Generated by Django 4.2.1 on 2023-06-29 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_otpmodel'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OtpModel',
            new_name='OneTimeCode',
        ),
    ]
