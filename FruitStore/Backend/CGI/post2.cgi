#!/usr/bin/perl -wT
use CGI qw(:standard);
use CGI::Carp qw(warningsToBrowser fatalsToBrowser);
use strict;

print header;
print start_html("Thank You");
print h2("Thank You");

my %form;
$p = param(-name=>'email');
print "$p = $form{$p}<br>\n";
# foreach my $p (param()) {
#     $form{$p} = param($p);
#     print "$p = $form{$p}<br>\n";
# }
 print end_html;
