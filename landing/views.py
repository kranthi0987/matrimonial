from django.shortcuts import render_to_response


# Create your views here.


def index(request):
    # template = loader.get_template("landingpage/index.html")
    return render_to_response("landingpage/index.html")


def handler404(request, exception, template_name="error.html"):
    response = render_to_response("error.html")
    response.status_code = 404
    return response


def handler500(request, exception, template_name="error.html"):
    response = render_to_response("error.html")
    response.status_code = 500
    return response

# from django.shortcuts import render

# def index(request):
#     return render(request, 'app/index.html')
