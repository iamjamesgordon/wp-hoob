<?php

namespace App\Providers\PostTypes;

use Illuminate\Support\ServiceProvider;

class Jobs extends ServiceProvider
{
    /**
     * Call action hook to add Jobs post type on load.
     *
     * @return void
     */
    public function register()
    {
        add_action('init', [$this, 'registerPostType']);
    }

    /**
     * Register the Jobs post type
     *
     * @return void
     */
    public function registerPostType()
    {
        register_post_type('Job', $this->args());
    }

    /**
     * Returning the arguments to be used for Jobs post type
     *
     * @return array
     */
    public function args()
    {
        $args = array(
            'labels'             => $this->labels(),
            'description'        => _x('Jobs custom post type.', 'wp-hoob'),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array( 'slug' => 'jobs' ),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => 20,
            'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
            'taxonomies'         => array( 'category' ),
            'show_in_rest'       => true,
            'menu_icon'          => 'dashicons-networking'
        );

        return $args;

    }

    /**
     * Returning the labels to be used for Jobs post type
     *
     * @return array
     */
    public function labels()
    {
        $labels = array(
            'name'                => _x('Jobs', 'Post type general name', 'wp-hoob'),
            'singular_name'       => _x('Job', 'Post type singular name', 'wp-hoob'),
        );

        return $labels;

    }

}
