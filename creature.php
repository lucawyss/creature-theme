<?php
namespace Grav\Theme;

use Grav\Common\Theme;
use RocketTheme\Toolbox\Event\Event;

class Creature extends Theme
{

    public static function getSubscribedEvents() {
        return [
            'onPageContentProcessed' => ['onPageContentProcessed', 0]
        ];
    }

    public function onPageContentProcessed(Event $event)
    {
        $page = $event['page'];
        $buffer = $page->content();
        $url = $page->url();
        $buffer = preg_replace("/<p><img src=\"(.*?)\" \/><\/p>/",
            "<p class='wrap-image'><img src='$1'></p>",
            $buffer);
        $buffer = preg_replace("/<p><img alt=\"(.*?)\" class=\"(.*?)\" src=\"(.*?)\" \/><\/p>/",
            "<p class='wrap-image $2'><img alt='$1' src='$3'></p>",
            $buffer);
        $buffer = preg_replace("/<p><img alt=\"(.*?)\" src=\"(.*?)\" \/><\/p>/",
            "<p class='wrap-image'><img alt='$1' src='$2'></p>",
            $buffer);
        $buffer = preg_replace("/<p><img class=\"(.*?)\" src=\"(.*?)\" \/><\/p>/",
            "<p class='wrap-image $1'><img src='$2'></p>",
            $buffer);
        $page->setRawContent($buffer);
    }

}
