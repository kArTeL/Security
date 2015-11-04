#!/usr/bin/perl -wT
use CGI qw(:standard);
use CGI::Carp qw(warningsToBrowser fatalsToBrowser);
use strict;

print header;
print start_html("Results");

# Set the PATH environment variable to the same path
# # where sendmail is located:
#
$ENV{PATH} = "/usr/sbin";

# open the pipe to sendmail
open (MAIL, "|/usr/sbin/sendmail -oi -t ") or &dienice("Can't fork for sendmail: $!\n");

# my %form;
# my $p = param(-name=>'email');
# print "$p = $form{$p}<br>\n";

# change this to your own e-mail address
my $recipient = param(-name=>'email');

# Start printing the mail headers
# You must specify who it's to, or it won't be delivered:

print MAIL "To: $recipient\n";

#Smtp credentials to send smtp messages
print MAIL "Username: usuario10\n";

#smtp password credential
print MAIL "Password: 7yJW2Zk6b8\n";

# From should probably be the webserver, although you could set it
# to the visitor's email address too.

#print MAIL "From: neilliga\@gmail.com\n";
print MAIL "From: usuario10\@orificio.ecci.ucr.ac.cr\n";

# print out a subject line so you know it's from your form cgi.

print MAIL "Subject: Reactivacion de usuario\n\n";

# Now print the body of your mail message.
print MAIL "Body: Porfavor ir a link http://192.168.122.2:7081/passwordrecovery?email=$recipient\n";
# foreach my $p (param()) {
#    print MAIL "$p = ", param($p), "\n";
# }

# Be sure to close the MAIL input stream so that the message
# actually gets mailed.

close(MAIL);

# Now print a thank-you page

print <<EndHTML;
<h2>Gracias</h2>
<p>Se te ha enviado un correo que indica los pasos para que puedas entrar al sitio!</p>
<p>Ir a la <a href="http://192.168.122.2:900/login.html">pagina de inicio</a></p>
EndHTML

print end_html;

# The dienice subroutine handles errors.

sub dienice {
    my ($errmsg) = @_;
    print "<h2>Error</h2>\n";
    print "<p>$errmsg</p>\n";
    print end_html;
    exit;
}
