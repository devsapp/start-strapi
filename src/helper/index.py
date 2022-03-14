# coding=utf-8

import requests
import os

def handler(event, context):
    url = os.environ['WP_URL']
    print(url + '/admin/project-type')
    res = requests.get(url + '/admin/project-type')
    print(res.json())
