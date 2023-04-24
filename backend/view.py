from flask import render_template


def articles_render(articles_list):
    return render_template("test.html", articles=articles_list)


