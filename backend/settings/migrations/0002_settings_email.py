# Generated by Django 4.0.4 on 2022-06-11 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='settings',
            name='email',
            field=models.CharField(max_length=256, null=True, verbose_name='email'),
        ),
    ]
