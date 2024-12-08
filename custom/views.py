from django.shortcuts import render
from django.views.generic.base import TemplateView

class CustomView(TemplateView):
    pass

#Auth Pages
login_view = CustomView.as_view(template_name="login.html")
register_view = CustomView.as_view(template_name="custom/auth-pages/register.html")
recoverpw_view = CustomView.as_view(template_name="custom/auth-pages/recoverpw.html")
lock_screen_view = CustomView.as_view(template_name="custom/auth-pages/lock-screen.html")
confirm_mail_view = CustomView.as_view(template_name="custom/auth-pages/confirm-mail.html")
logout_view = CustomView.as_view(template_name="custom/auth-pages/logout.html")

#Extra Pages
starter_view = CustomView.as_view(template_name="custom/extra-pages/starter.html")
pricing_view = CustomView.as_view(template_name="custom/extra-pages/pricing.html")
timeline_view = CustomView.as_view(template_name="custom/extra-pages/timeline.html")
invoice_view = CustomView.as_view(template_name="custom/extra-pages/invoice.html")
faqs_view = CustomView.as_view(template_name="custom/extra-pages/faqs.html")
gallery_view = CustomView.as_view(template_name="custom/extra-pages/gallery.html")
error_404_view = CustomView.as_view(template_name="custom/extra-pages/error-400.html")
error_500_view = CustomView.as_view(template_name="custom/extra-pages/error-500.html")
maintenance_view = CustomView.as_view(template_name="custom/extra-pages/maintenance.html")
coming_soon_view = CustomView.as_view(template_name="custom/extra-pages/coming-soon.html")
