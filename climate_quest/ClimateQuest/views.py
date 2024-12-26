from django.shortcuts import render, HttpResponse, get_object_or_404, redirect
from .models import Article
from django.core.mail import send_mail
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def multimedia(request):
    return render(request, "multimedia.html")

def activities(request):
    return render(request, "activities.html")

def game(request):
    return render(request, "game.html")

def monkeyconnectgame(request):
    return render(request, "monkeyconnectgame.html")

def cubeblockgame(request):
    return render(request, "cubeblockgame.html")

def goblinrungame(request):
    return render(request, "goblinrungame.html")

# View to display all articles
def article_list(request):
    articles = Article.objects.all()
    return render(request, 'articles.html', {'articles': articles})

# View to display a single article
def article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug)
    return render(request, 'article_detail.html', {'article': article})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Example email sending functionality
        full_message = f"From: {name}\nEmail: {email}\n\n{message}"
        send_mail(subject, full_message, 'your_email@example.com', ['receiver_email@example.com'])
        
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('contact')
        
    return render(request, 'contact.html')